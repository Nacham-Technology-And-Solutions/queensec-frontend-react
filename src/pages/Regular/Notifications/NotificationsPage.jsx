import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import planeIcon from '../../../assets/planeicon.png';

import { useUser } from '../../../context/UserContext';
import BottomNavigator from '../../../components/BottomNavigator/BottomNavigator';
import PageLayout from '../../../components/PageLayout/PageLayout';
import useNotifications from '../../../hooks/useNotifications';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';

const NotificationPage = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const {
    notifications,
    unreadCount,
    loading,
    error,
    pagination,
    fetchAll,
    markAsRead,
    markAllAsRead,
  } = useNotifications(true);

  const [groupedNotifications, setGroupedNotifications] = useState({});

  const goToDashboard = () => {
    if (user?.accountType === 'federal_agency') {
      return '/enterprise-dashboard';
    } else if (user?.accountType === 'vendor') {
      return '/vendor-dashboard';
    } else if (user?.accountType === 'individual') {
      return '/dashboard';
    }
  };

  // Group notifications by date
  useEffect(() => {
    const grouped = {};
    notifications.forEach((notification) => {
      const date = new Date(notification.created_at);
      const dateKey = date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });

      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }
      grouped[dateKey].push(notification);
    });
    setGroupedNotifications(grouped);
  }, [notifications]);

  const handleNotificationClick = async (notification) => {
    // Mark as read if unread
    if (!notification.is_read) {
      await markAsRead(notification.id);
    }

    // Navigate to details page with notification data
    navigate('/notifications-details', {
      state: { notification },
    });
  };

  const handleMarkAllAsRead = async () => {
    await markAllAsRead();
  };

  const formatNotificationType = (type) => {
    const typeMap = {
      info: 'Info',
      warning: 'Warning',
      alert: 'Alert',
    };
    return typeMap[type] || type;
  };

  const getNotificationIcon = (type) => {
    // You can customize icons based on notification type
    return planeIcon;
  };

  const handleLoadMore = () => {
    if (pagination.current_page < pagination.last_page) {
      fetchAll(pagination.current_page + 1, true);
    }
  };

  return (
    <PageLayout>
      <Header>
        <Title>Notifications</Title>
        {notifications.length > 0 && (
          <MarkAllButton onClick={handleMarkAllAsRead}>
            Mark all as read
          </MarkAllButton>
        )}
      </Header>

      {loading && notifications.length === 0 ? (
        <LoadingContainer>
          <LoadingSpinner />
        </LoadingContainer>
      ) : error ? (
        <ErrorContainer>
          <ErrorMessage>{error}</ErrorMessage>
          <RetryButton onClick={() => fetchAll(1)}>Retry</RetryButton>
        </ErrorContainer>
      ) : notifications.length === 0 ? (
        <EmptyState>
          <EmptyMessage>No notifications yet</EmptyMessage>
          <EmptySubMessage>You'll see your notifications here</EmptySubMessage>
        </EmptyState>
      ) : (
        <NotificationsList>
          {Object.entries(groupedNotifications).map(([date, dateNotifications]) => (
            <DateGroup key={date}>
              <DateLabel>{date}</DateLabel>
              {dateNotifications.map((notification) => (
                <NotificationContainer
                  key={notification.id}
                  onClick={() => handleNotificationClick(notification)}
                  $isUnread={!notification.is_read}
                >
                  <PlaneIcon
                    src={getNotificationIcon(notification.type)}
                    alt="Notification Icon"
                  />
                  <NotificationContent>
                    <NotificationHeader>
                      <NotificationText>{notification.title}</NotificationText>
                      {!notification.is_read && <UnreadBadge />}
                    </NotificationHeader>
                    <PreviewMessage>{notification.message}</PreviewMessage>
                    {notification.type && (
                      <TypeBadge $type={notification.type}>
                        {formatNotificationType(notification.type)}
                      </TypeBadge>
                    )}
                  </NotificationContent>
                </NotificationContainer>
              ))}
            </DateGroup>
          ))}

          {pagination.current_page < pagination.last_page && (
            <LoadMoreButton onClick={handleLoadMore} disabled={loading}>
              {loading ? 'Loading...' : 'Load More'}
            </LoadMoreButton>
          )}
        </NotificationsList>
      )}

      {/* Bottom Navigation */}
      <BottomNavigator
        currentPage="notifications"
        dashboardLink={goToDashboard()}
        transactionLink="/transactions"
        notificationLink="/notifications"
        profileLink="/user-profile"
        unreadCount={unreadCount}
      />
    </PageLayout>
  );
};

// Styled Components
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0.38px;
  color: #6c3ecf;
  margin: 0;
`;

const MarkAllButton = styled.button`
  background: none;
  border: none;
  color: #6c3ecf;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const NotificationsList = styled.div`
  max-height: calc(100vh - 200px);
  overflow-y: auto;
  padding-bottom: 20px;
`;

const DateGroup = styled.div`
  margin-bottom: 30px;
`;

const DateLabel = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: #414d63;
  margin: 0 0 15px 0;
`;

const NotificationContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  border-left: ${(props) => (props.$isUnread ? '4px solid #6c3ecf' : '4px solid transparent')};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const PlaneIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 15px;
  flex-shrink: 0;
`;

const NotificationContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const NotificationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 5px;
`;

const NotificationText = styled.h2`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.154px;
  color: #414d63;
  margin: 0;
  flex: 1;
`;

const UnreadBadge = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #6c3ecf;
  margin-left: 10px;
  flex-shrink: 0;
`;

const PreviewMessage = styled.p`
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.154px;
  color: #67728a;
  margin: 5px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const TypeBadge = styled.span`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 10px;
  font-weight: 500;
  margin-top: 5px;
  width: fit-content;
  background-color: ${(props) => {
    switch (props.$type) {
      case 'warning':
        return '#fff3cd';
      case 'alert':
        return '#f8d7da';
      default:
        return '#d1ecf1';
    }
  }};
  color: ${(props) => {
    switch (props.$type) {
      case 'warning':
        return '#856404';
      case 'alert':
        return '#721c24';
      default:
        return '#0c5460';
    }
  }};
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  padding: 20px;
`;

const ErrorMessage = styled.p`
  color: #dc3545;
  font-size: 14px;
  margin-bottom: 15px;
  text-align: center;
`;

const RetryButton = styled.button`
  background-color: #6c3ecf;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #5a2fb8;
  }
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  padding: 20px;
`;

const EmptyMessage = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #414d63;
  margin-bottom: 5px;
`;

const EmptySubMessage = styled.p`
  font-size: 12px;
  color: #67728a;
`;

const LoadMoreButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #f7f9fa;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  color: #6c3ecf;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background-color: #e9ecef;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default NotificationPage;

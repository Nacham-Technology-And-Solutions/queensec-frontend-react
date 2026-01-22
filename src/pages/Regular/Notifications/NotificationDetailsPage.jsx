import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import backIcon from '../../../assets/left.png';
import useNotifications from '../../../hooks/useNotifications';
import PageLayout from '../../../components/PageLayout/PageLayout';

const NotificationDetailsPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { markAsRead } = useNotifications(false);
    const [notification, setNotification] = useState(null);

    useEffect(() => {
        // Get notification from location state or try to get from URL params
        const notificationData = location.state?.notification;
        
        if (notificationData) {
            setNotification(notificationData);
            // Mark as read if unread
            if (!notificationData.is_read) {
                markAsRead(notificationData.id);
            }
        } else {
            // If no notification data, redirect back
            navigate('/notifications');
        }
    }, [location.state, navigate, markAsRead]);

    const handleBack = () => {
        navigate(-1);
    };

    const handleClickAction = () => {
        if (notification?.click_action && notification?.click_url) {
            // Check if it's a relative URL or absolute URL
            if (notification.click_url.startsWith('http')) {
                window.location.href = notification.click_url;
            } else {
                navigate(notification.click_url);
            }
        }
    };

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    const getTypeColor = (type) => {
        switch (type) {
            case 'warning':
                return '#856404';
            case 'alert':
                return '#721c24';
            default:
                return '#0c5460';
        }
    };

    const getTypeBackground = (type) => {
        switch (type) {
            case 'warning':
                return '#fff3cd';
            case 'alert':
                return '#f8d7da';
            default:
                return '#d1ecf1';
        }
    };

    if (!notification) {
        return (
            <PageLayout>
                <LoadingContainer>Loading...</LoadingContainer>
            </PageLayout>
        );
    }

    return (
        <PageLayout>
            <Container>
                <Header>
                    <BackButton onClick={handleBack}>
                        <BackIcon src={backIcon} alt="Back" />
                    </BackButton>
                </Header>

                {notification.type && (
                    <TypeBadge $type={notification.type} $color={getTypeColor(notification.type)} $bg={getTypeBackground(notification.type)}>
                        {notification.type.charAt(0).toUpperCase() + notification.type.slice(1)}
                    </TypeBadge>
                )}

                <Title>{notification.title || notification.subject}</Title>

                {notification.created_at && (
                    <DateText>{formatDate(notification.created_at)}</DateText>
                )}

                <Message>{notification.message}</Message>

                {notification.click_action && notification.click_url && (
                    <ActionButton onClick={handleClickAction}>
                        {notification.click_text || 'View Details'}
                    </ActionButton>
                )}

                {notification.entity_id && (
                    <Metadata>
                        <MetadataLabel>Entity ID:</MetadataLabel>
                        <MetadataValue>{notification.entity_id}</MetadataValue>
                    </Metadata>
                )}

                {(notification.broad_category || notification.sub_category) && (
                    <Metadata>
                        <MetadataLabel>Category:</MetadataLabel>
                        <MetadataValue>
                            {notification.broad_category}
                            {notification.sub_category && ` • ${notification.sub_category}`}
                        </MetadataValue>
                    </Metadata>
                )}
            </Container>
        </PageLayout>
    );
};

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f7f9fa;
  min-height: calc(100vh - 100px);
  max-width: 400px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;

  &:hover {
    transform: translateX(-2px);
  }
`;

const BackIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const TypeBadge = styled.span`
  display: inline-block;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 15px;
  width: fit-content;
  background-color: ${(props) => props.$bg};
  color: ${(props) => props.$color};
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  color: #414d63;
  margin: 0 0 10px 0;
  text-align: left;
`;

const DateText = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #67728a;
  margin: 0 0 20px 0;
`;

const Message = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #414d63;
  margin: 0 0 30px 0;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const ActionButton = styled.button`
  width: 100%;
  padding: 12px 20px;
  background-color: #6c3ecf;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 20px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #5a2fb8;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const Metadata = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  padding: 10px;
  background-color: white;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
`;

const MetadataLabel = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #67728a;
  margin-bottom: 5px;
`;

const MetadataValue = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #414d63;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  color: #67728a;
`;

export default NotificationDetailsPage;
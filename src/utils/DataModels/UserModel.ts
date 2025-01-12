enum UserType {
    INDIVIDUAL = "individual",
    CORPERATE = "corperate",
    STATEAGENCY = "state_agency",
    FEDERALAGENCY = "federal_agency",
    VENDOR = "vendor"
}

class UserModel {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    phone: string;
    userType: string;

    constructor(id: number,
        firstName: string,
        middleName: string,
        lastName: string,
        email: string,
        phone: string,
        userType: string,
    ) {
        this.id = id;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.userType = userType;
    }

    copyWith(
        id: number | undefined,
        firstName: string | undefined,
        middleName: string | undefined,
        lastName: string | undefined,
        email: string | undefined,
        phone: string | undefined,
        userType: string | undefined
    ) {
        return new UserModel(
            id ?? this.id,
            firstName ?? this.firstName,
            middleName ?? this.middleName,
            lastName ?? this.lastName,
            email ?? this.email,
            phone ?? this.phone,
            userType ?? this.userType,
        );
    }
}

export default UserModel;
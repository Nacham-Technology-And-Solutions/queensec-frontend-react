class PaymentModel {
    userID: number;
    taxID: number;
    payerID: number;
    payeeID: number;
    mineralID: number;
    mineralSubID: number;
    totalAmount: number;
    driverName: string;
    phoneNumber: string;
    loadingPoint: string;
    offloadingPoint: string;
    haulerTypeID: number;
    payeeHaulerID: number;
    numberPlate: string;

    constructor(
        userID: number = 0,
        taxID: number = 0,
        payerID: number = 0,
        payeeID: number = 0,
        mineralID: number = 0,
        mineralSubID: number = 0,
        totalAmount: number = 0,
        driverName: string = "",
        phoneNumber: string = "",
        loadingPoint: string = "",
        offloadingPoint: string = "",
        haulerTypeID: number = 0,
        payeeHaulerID: number = 0,
        numberPlate: string = "",
    ) {
        this.userID = userID;
        this.taxID = taxID;
        this.payerID = payerID;
        this.payeeID = payeeID;
        this.mineralID = mineralID;
        this.mineralSubID = mineralSubID;
        this.totalAmount = totalAmount;
        this.driverName = driverName;
        this.phoneNumber = phoneNumber;
        this.loadingPoint = loadingPoint;
        this.offloadingPoint = offloadingPoint;
        this.haulerTypeID = haulerTypeID;
        this.payeeHaulerID = payeeHaulerID;
        this.numberPlate = numberPlate;
    }

    copyWith(
        userID: number | undefined,
        taxID: number | undefined,
        payerID: number | undefined,
        payeeID: number | undefined,
        mineralID: number | undefined,
        mineralSubID: number | undefined,
        totalAmount: number | undefined,
        driverName: string | undefined,
        phoneNumber: string | undefined,
        loadingPoint: string | undefined,
        offloadingPoint: string | undefined,
        haulerTypeID: number | undefined,
        payeeHaulerID: number | undefined,
        numberPlate: string | undefined
    ) {
        return new PaymentModel(
            userID ?? this.userID,
            taxID ?? this.taxID,
            payerID ?? this.payerID,
            payeeID ?? this.payeeID,
            mineralID ?? this.mineralID,
            mineralSubID ?? this.mineralSubID,
            totalAmount ?? this.totalAmount,
            driverName ?? this.driverName,
            phoneNumber ?? this.phoneNumber,
            loadingPoint ?? this.loadingPoint,
            offloadingPoint ?? this.offloadingPoint,
            haulerTypeID ?? this.haulerTypeID,
            payeeHaulerID ?? this.payeeHaulerID,
            numberPlate ?? this.numberPlate,
        );
    }

    /**
 * Converts the PaymentModel instance to a JSON object.
 */
    toJson(): Record<string, any> {
        return {
            user_id: this.userID,
            tax_id: this.taxID,
            payer_id: this.payerID,
            payee_id: this.payeeID,
            mineral_id: this.mineralID,
            fee_category_id: this.mineralSubID,
            total_amount: this.totalAmount,
            driver_name: this.driverName,
            phone_number: this.phoneNumber,
            loading_point: this.loadingPoint,
            offloading_point: this.offloadingPoint,
            hauler_type_id: this.haulerTypeID,
            payee_hauler_id: this.payeeHaulerID,
            number_plate: this.numberPlate,
        };
    }

    /**
     * Creates a PaymentModel instance from a JSON object.
     */
    static fromJson(json: Record<string, any>): PaymentModel {
        return new PaymentModel(
            json.user_id,
            json.tax_id,
            json.payer_id,
            json.payee_id,
            json.mineral_id,
            json.fee_category_id,
            json.total_amount,
            json.driver_name,
            json.phone_number,
            json.loading_point,
            json.offloading_point,
            json.hauler_type_id,
            json.payee_hauler_id,
            json.number_plate
        );
    }


}

export default PaymentModel;
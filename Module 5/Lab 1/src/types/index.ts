export interface RequestWithUser extends Express.Request {
    user?: any; // Extend with your user type
}

export interface ResponseData {
    success: boolean;
    message: string;
    data?: any;
}
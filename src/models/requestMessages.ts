export enum RequestMessages {
    NotFound = "Endpoint not found.%404",
    EmailExists = "Email already in use.%409",
    NotValidEmail = "Not a valid username.%422",
    WrongEmail = "Incorrect email.%400",
    WrongPassword = "Incorrect Password.%400",
    Unauthorized = "Unauthorized.%401",
    Forbidden = "Forbidden.403%"
}
import { IsString, IsDate, IsEmail, IsPhoneNumber, ValidateNested, IsNotEmpty } from "class-validator";

export class CreateEventDto {
    @IsString()
    @IsNotEmpty()
    eventName: string;

    @IsDate()
    eventDate: Date;

    @IsString()
    organizer: string;

    @IsEmail()
    email: string;

    @IsPhoneNumber()
    phone: string;

    @ValidateNested()
    location: {
        street: string;
        city: string;
        state: string;
        zip: string;
    };
}

// src/events/dto/update-event.dto.ts
import { IsString, IsOptional, IsDate, IsEmail, IsPhoneNumber, ValidateNested } from "class-validator";

export class UpdateEventDto {
    @IsString()
    @IsOptional()
    eventName?: string;

    @IsDate()
    @IsOptional()
    eventDate?: Date;

    @IsString()
    @IsOptional()
    organizer?: string;

    @IsEmail()
    @IsOptional()
    email?: string;

    @IsPhoneNumber()
    @IsOptional()
    phone?: string;

    @ValidateNested()
    @IsOptional()
    location?: {
        street?: string;
        city?: string;
        state?: string;
        zip?: string;
    };
}

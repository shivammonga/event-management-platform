// src/events/events.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";
import { EventService } from "../services/event.service";
import { Event } from "../entities/event.entity";
import { UpdateEventDto } from "../dto/update-event.dto";

@Controller("events")
export class EventController {
    constructor(private readonly eventService: EventService) {}

    @Post()
    create(@Body() event: Event): Event {
        return this.eventService.create(event);
    }

    @Get()
    findAll(): Event[] {
        return this.eventService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string): Event {
        return this.eventService.findOne(id);
    }

    @Put(":id")
    update(@Param("id") id: string, @Body() updateEventDto: UpdateEventDto): Event {
        return this.eventService.update(id, updateEventDto);
    }

    @Delete(":id")
    delete(@Param("id") id: string): void {
        this.eventService.delete(id);
    }
}

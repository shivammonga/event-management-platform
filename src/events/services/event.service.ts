// src/events/events.service.ts
import { Injectable, NotFoundException } from "@nestjs/common";
import { Event } from "../entities/event.entity";
import { UpdateEventDto } from "../dto/update-event.dto";

@Injectable()
export class EventService {
    private events: Event[] = [];

    create(event: Event): Event {
        event.id = Date.now().toString();
        event.createdAt = new Date();
        event.updatedAt = new Date();
        this.events.push(event);
        return event;
    }

    findAll(): Event[] {
        return this.events;
    }

    findOne(id: string): Event {
        const event = this.events.find((e) => e.id === id);
        if (!event) {
            throw new NotFoundException(`Event with ID ${id} not found`);
        }
        return event;
    }

    update(id: string, updateEventDto: UpdateEventDto): Event {
        const event = this.findOne(id);
        Object.assign(event, updateEventDto, { updatedAt: new Date() });
        return event;
    }

    delete(id: string): void {
        const index = this.events.findIndex((e) => e.id === id);
        if (index === -1) {
            throw new NotFoundException(`Event with ID ${id} not found`);
        }
        this.events.splice(index, 1);
    }
}

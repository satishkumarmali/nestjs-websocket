import { Controller, Get, Post } from '@nestjs/common';
import { PollService } from './poll.service';

@Controller('poll')
export class PollController {
    constructor(
        private readonly pollService: PollService
    ) {}

    @Get('/vote') 
    async storeVote() {
        const data = await this.pollService.storeVote();
        return { data };
    }
}

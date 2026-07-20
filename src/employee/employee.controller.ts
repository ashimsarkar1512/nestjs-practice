import { Controller, Get } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
 @Get()
    getUsers() {
        return 'This action returns all employees';
    }
}


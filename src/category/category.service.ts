import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  getCategories() {
    return [
      'Electronics',
      'Clothing',
      'Books',
      'Home & Kitchen',
      'Sports & Outdoors',
    ];
  }
}

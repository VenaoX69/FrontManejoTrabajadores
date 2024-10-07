import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination',
  standalone: true
})
export class PaginationPipe implements PipeTransform {

  transform(items: any[], page: number = 1, pageSize: number = 5): any[] {
    if (!items || items.length === 0) {
      return [];
    }

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    return items.slice(startIndex, endIndex);
  }

}

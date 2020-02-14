export class PaginationHttpAdapter {
  public static transform(data: IPaginationApi): IPagination {
    return {
      total: data.total_count,
      count: data.count,
      offset: data.offset
    };
  }
}

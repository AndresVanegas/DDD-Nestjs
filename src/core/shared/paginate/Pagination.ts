import { PaginationResult } from "./PaginationResult";

export class Pagination<PaginationEntity> {
    private results: PaginationEntity[];
    private page_total: number;
    private total: number;
  
    constructor(paginationResults: PaginationResult<PaginationEntity>) {
      this.results = paginationResults.results;
      this.page_total = paginationResults.results.length;
      this.total = paginationResults.total;
    }
  }
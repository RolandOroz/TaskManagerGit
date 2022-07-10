import {Injectable} from '@angular/core';

@Injectable()
export class DashboardService {

  getTeamMembersSummary():any[] {
    return [
      {Region: "East", TeamMembersCount: 20, TemporarilyUnavailableMembers: 4},
      {Region: "West", TeamMembersCount: 15, TemporarilyUnavailableMembers: 8},
      {Region: "South", TeamMembersCount: 17, TemporarilyUnavailableMembers: 1},
      {Region: "North", TeamMembersCount: 15, TemporarilyUnavailableMembers: 6},
    ];
  }

  getTeamMembers():any[] {
    return [
      {
        Region: "East", Members: [
          {ID: 1, Name: "Ford", Status: "Busy"},
          {ID: 2, Name: "Miller", Status: "Available"},
          {ID: 3, Name: "Jones", Status: "Busy"},
          {ID: 4, Name: "James", Status: "Available"},
        ]
      },
      {
        Region: "West", Members: [
          {ID: 5, Name: "Anna", Status: "Available"},
          {ID: 6, Name: "Jasmine", Status: "Busy"},
          {ID: 7, Name: "Jim", Status: "Available"},
          {ID: 8, Name: "George", Status: "Busy"},
        ]
      },
      {
        Region: "South", Members: [
          {ID: 9, Name: "Luce", Status: "Available"},
          {ID: 10, Name: "Max", Status: "Available"},
          {ID: 11, Name: "Jacob", Status: "Available"},
          {ID: 12, Name: "Emily", Status: "Busy"},
        ]
      },
      {
        Region: "North", Members: [
          {ID: 13, Name: "Frank", Status: "Available"},
          {ID: 14, Name: "Megan", Status: "Available"},
          {ID: 15, Name: "Sharon", Status: "Busy"},
          {ID: 16, Name: "Tim", Status: "Busy"},
        ]
      }
    ]
  }

}

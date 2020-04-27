import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { Router } from '@angular/router';
import { TosterService } from 'src/app/services/toster.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [routerTransition()]

})
export class UserComponent implements OnInit {
  columns: any[];
  data: any = [];
  constructor(private userService: UserService,
    private router: Router, private toaster: TosterService) {
    this.getUsers();
  }

  ngOnInit(): void {
    this.columns = [
      { key: 'username', title: "User Name" },
      { key: 'email', title: "Email" },
      { key: 'mobile', title: "Mobile" },
    ]
  }
  onPageChange(event) {
    console.log(JSON.stringify(event));
  }


  getUsers() {
    this.userService.get().subscribe(data => {
      if (data.success) {
        this.data = data.data;
      } else {
        this.toaster.warning(data.msg, 'User');
      }
    },
      error => {
        this.toaster.error(error.error, 'User');
      });
  }

  onEdit(event) {
    this.router.navigateByUrl('/admin/user-addEdit', { state: event._id });
  }
  onAdd() {
    this.router.navigate(['/admin/user-addEdit']);
  }
  onActiveDeactive(event) {
    this.userService.activeDeactive(event._id, !event.active).subscribe(data => {
      if (data.success) {
        event.active = !event.active;
        this.toaster.success(data.msg, 'User');
      } else {
        this.toaster.warning(data.msg, 'User');
      }
    },
      error => {
        this.toaster.error(error.error, 'User');
      });
  }
  onDelete(event) {
    this.userService.deleteUser(event._id).subscribe(data => {
      if (data.success) {
        this.toaster.success(data.msg, 'User');
        let updatedData = this.data.filter(item => item._id !== event._id);
        this.data = updatedData;
      } else {
        this.toaster.warning(data.msg, 'User');
      }
    },
      error => {
        this.toaster.error(error.error, 'User');
      });
  }
}

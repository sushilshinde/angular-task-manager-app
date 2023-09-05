import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NewTaskComponent } from 'src/app/new-task/new-task.component';
import { Store } from '@ngrx/store';

import * as AuthActions from 'src/app/store/auth.actions';
import { selectLoggedInUser } from 'src/app/store/auth.selectors';
import { concatMap, debounceTime, distinctUntilChanged, EMPTY, filter, map, pluck, Subscription, switchMap } from 'rxjs';
import { NgForm } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';


@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
})
export class MenubarComponent implements AfterViewInit, OnDestroy {

  searchKey: String = '';
  loginTime: Date | null; // Initialize as null
  loggedInUser$ = this.store.select(selectLoggedInUser);

  menuItems = [
    { icon: 'group', label: 'Manage', route: '' },
    { icon: 'dns', label: 'Boards', route: '' },
    { icon: 'event_note', label: 'Schedule', route: '' },
    { icon: 'assessment', label: 'Reports', route: '' },
  ];

  loading: boolean = false;
  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }

  @ViewChild('searchForm') searchForm?: NgForm;
  searchResults?: any;
  searchResultCount: any;

  private subscription!: Subscription;

  constructor(
    private auth: AuthService,
    private router: Router,
    private dialogRef: MatDialog,
    private store: Store,
    private _searchService: SearchService
  ) {

    this.loginTime = auth.getLoginTime(); // Initialize loginTime
    this.subscription = this.loggedInUser$.subscribe(user => {
      console.log('Logged In User:', user);
    });
  }


  logout(): void {
    this.auth.logout();
    this.store.dispatch(AuthActions.isLogout());
  }

  addNewTask() {
    this.dialogRef.open(NewTaskComponent);
  }

  ngAfterViewInit(): void {
    // this._searchService.getSearches('Onboarding design').subscribe(res =>{
    //   console.log()
    // })

    const formValue = this.searchForm?.valueChanges;

    formValue?.pipe(
      // map(data => data.searchTerm)
      //or
      // map(data => data['searchTerm'])
      //or pluck
      filter(() => !!this.searchForm?.valid),
      // pluck('searchTerm'),
      map(data => data.searchTerm),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(data => {
        this.loading = true; // Show spinner while loading
        return this._searchService.getSearches(data);
      })

    )
      .subscribe(res => {
        console.log("Search results :", res)
        this.searchResults = res;
        this.searchResultCount = Object.keys(res).length;
        this.loading = false; // Hide spinner once data is loaded
      })

  }


  getColorByPriority(priority: string): string {
    switch (priority) {
      case 'low-priority':
        return '#5196f6';
      case 'high-priority':
        return '#ce5388';
      case 'medium-priority':
        return '#6bc8d1';
      default:
        return 'black';
    }
  }


  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}



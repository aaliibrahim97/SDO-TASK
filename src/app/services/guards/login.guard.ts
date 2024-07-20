import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {

  let router = inject(Router);

  if(!localStorage.getItem('username')) {
    return true;
  }
  else {
    router.navigate(['/'])
    return false;
  }
};

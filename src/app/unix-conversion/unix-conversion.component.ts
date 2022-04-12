import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-unix-conversion',
  templateUrl: './unix-conversion.component.html',
  styleUrls: ['./unix-conversion.component.css'],
})
export class UnixConversionComponent implements OnInit {
  ngOnInit(): void {}
  offset: any;
  date: any;
  timeStampVal: any;
  constructor() {
    this.timestamptoLT('Asia/Karachi');
    // getValue(1647600477);
  }

  // displayTz(val: any) {
  //   this.ZoneSelected = val;
  //   interval(1).subscribe((d) => {
  //     const unixTime = 1647595600;
  //     this.date = new Date(unixTime * 1000);
  //     this.date1 = new Date().toLocaleString('en-Nz', {
  //       timeZone: this.ZoneSelected,
  //       timeZoneName: 'short',
  //     });
  //   });
  // }

  getValue(val: any) {
    this.timeStampVal = val;
    console.warn(this.timeStampVal);
  }

  timestamptoLT(val: any) {
    // const timeStamp = 1647597003;
    this.ZoneSelected = val;
    // const unixTime = this.timeStampVal;
    this.date = new Date(this.timeStampVal * 1000);
  }

  my_timezones = [
    {
      offset: 'GMT-07:00',
      name: 'America/Los_Angeles',
    },

    {
      offset: 'GMT-06:00',
      name: 'America/Denver',
    },
    {
      offset: 'GMT-06:00',
      name: 'America/Belize',
    },
    {
      offset: 'GMT-05:00',
      name: 'America/Cancun',
    },
    {
      offset: 'GMT-06:00',
      name: 'America/Chicago',
    },

    {
      offset: 'GMT-04:00',
      name: 'America/New_York',
    },
    {
      offset: 'GMT-04:30',
      name: 'America/Caracas',
    },
    {
      offset: 'GMT-04:00',
      name: 'America/Campo_Grande',
    },

    {
      offset: 'GMT',
      name: 'Europe/London',
    },
    {
      offset: 'UTC',
      name: 'UTC',
    },

    {
      offset: 'GMT+01:00',
      name: 'Europe/Amsterdam',
    },
    {
      offset: 'GMT+01:00',
      name: 'Europe/Belgrade',
    },
    {
      offset: 'GMT+01:00',
      name: 'Europe/Brussels',
    },
    {
      offset: 'GMT+02:00',
      name: 'Africa/Cairo',
    },
    {
      offset: 'GMT+02:00',
      name: 'Africa/Blantyre',
    },
    {
      offset: 'GMT+02:00',
      name: 'Asia/Beirut',
    },
    {
      offset: 'GMT+02:00',
      name: 'Asia/Damascus',
    },
    {
      offset: 'GMT+02:00',
      name: 'Asia/Gaza',
    },
    {
      offset: 'GMT+02:00',
      name: 'Asia/Jerusalem',
    },

    {
      offset: 'GMT+03:00',
      name: 'Asia/Riyadh',
    },
    {
      offset: 'GMT+03:00',
      name: 'Europe/Minsk',
    },
    {
      offset: 'GMT+03:30',
      name: 'Asia/Tehran',
    },
    {
      offset: 'GMT+04:00',
      name: 'Asia/Dubai',
    },

    {
      offset: 'GMT+03:00',
      name: 'Europe/Moscow',
    },
    {
      offset: 'GMT+04:30',
      name: 'Asia/Kabul',
    },
    {
      offset: 'GMT+05:00',
      name: 'Asia/Karachi',
    },
    {
      offset: 'GMT+05:30',
      name: 'Asia/Kolkata',
    },
    {
      offset: 'GMT+05:45',
      name: 'Asia/Katmandu',
    },
    {
      offset: 'GMT+06:00',
      name: 'Asia/Dhaka',
    },
    {
      offset: 'GMT+07:00',
      name: 'Asia/Bangkok',
    },
    {
      offset: 'GMT+07:00',
      name: 'Asia/Novosibirsk',
    },
    {
      offset: 'GMT+08:00',
      name: 'Etc/GMT+8',
    },
    {
      offset: 'GMT+08:00',
      name: 'Asia/Hong_Kong',
    },

    {
      offset: 'GMT+08:00',
      name: 'Australia/Perth',
    },

    {
      offset: 'GMT+09:00',
      name: 'Asia/Seoul',
    },
    {
      offset: 'GMT+09:00',
      name: 'Asia/Tokyo',
    },
    {
      offset: 'GMT+09:30',
      name: 'Australia/Adelaide',
    },
    {
      offset: 'GMT+09:30',
      name: 'Australia/Darwin',
    },

    {
      offset: 'GMT+10:00',
      name: 'Australia/Brisbane',
    },
    {
      offset: 'GMT+10:00',
      name: 'Australia/Hobart',
    },
    {
      offset: 'GMT+9:00',
      name: 'Asia/Yakutsk',
    },

    {
      offset: 'GMT-4:00',
      name: 'Pacific/Norfolk',
    },
    {},
  ];

  ZoneSelected = '';
}

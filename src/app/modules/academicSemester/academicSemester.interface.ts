export type TMonths = 'January' | 'February' | 'March' | 'April' | 'May' | 'June' | 'July' | 'August' | 'September' | 'October' | 'November' | 'December';

export type TAcademicSemesterNames = 'Autumn' | 'Fall' | 'Summer';

export type TAcademicSemesterCodes = '01' | '02' | '03';

export type TAcademicSemester = {
  name: TAcademicSemesterNames;
  code: TAcademicSemesterCodes;
  year: String;
  startMonth: TMonths;
  endMonth: TMonths;
}


export type TAcademicSemesterNameCodeMapper = {
    [key: string]: string
  }
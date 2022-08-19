export enum LanguageType {
  angular = 'angular',
  reactjs = 'reactjs',
  vuejs = 'vuejs'
}

interface IValue {
  value: string;
  name: string;
} 

export const LanguageTypes: IValue[] = [
  { value: LanguageType.angular, name: "Angular" },
  { value: LanguageType.reactjs, name: "React" },
  { value: LanguageType.vuejs, name: "Vue" },
];
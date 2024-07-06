/* Types declaration for project mock API data */

// Transaction API
interface Transaction {
  txId: string;
  user: string;
  date: string;
  cost: number;
}
type TransactionsData = readonly Transaction[];

// Team API
interface Team {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  access: 'manager' | 'admin' | 'user';
}
type TeamData = readonly Team[];

// Contacts API
interface Contact {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  registrarId: number;
}
type ContactsData = readonly Contact[];

// Invoices API
interface Invoice {
  id: number;
  name: string;
  email: string;
  cost: string;
  phone: string;
  date: string;
}
type InvoicesData = readonly Invoice[];

// Pie chart API
interface PieChart {
  name: string;
  data: number;
}
type PieChartData = PieChart[];

// Geography chart API
interface GeoChart {
  id: string;
  value: number;
}
type GeoChartData = GeoChart[];

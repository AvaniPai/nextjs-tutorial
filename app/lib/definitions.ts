// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.

export type SimpleGuest = {
  guest_id: string;
  name: string;
  email: string;
  password: string;
};

export type InvitedEvents = {
  guest_id: string;
  reception_only: boolean;
  sangeet_reception_only: boolean;
  sanmuhrec: boolean;
  all_events: boolean;
  all_us_japan: boolean;
};

export type RSVPResults = {
	guest_id: string;
	reception_only: boolean;
	sangeet_reception_only: boolean;
	sanmuhrec: boolean;
	all_events: boolean;
	all_us_japan: boolean;
	hasrsvped: boolean;
	isattendingmehendi: string;
	mehendipartysize: number;
	isattendinghaldi: string;
	haldipartysize: number;
	isattendingsangeet: string;
	sangeetpartysize: number;
	isattendingmuhurtham: string;
	muhurthampartysize: number;
	isattendingreception: string;	
	receptionpartysize: number;
	partymembers: string;
	isattendingshinzenshiki: string;
	shinzenshikipartysize: number;
	isattendinghiroen: string;
	hiroenpartysize: number;
	allergies: string;
};
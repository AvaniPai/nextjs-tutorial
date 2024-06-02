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
  haldi: boolean;
  mehendi: boolean;
  sangeet: boolean;
  muhurtham: boolean;
  reception: boolean;
  shinzenshiki: boolean;
  hiroen: boolean;
};
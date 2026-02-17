import Map "mo:core/Map";
import Text "mo:core/Text";
import Time "mo:core/Time";
import List "mo:core/List";
import Iter "mo:core/Iter";

actor {
  type ContactDetails = {
    address : Text;
    phones : [Text];
    whatsapp : Text;
    email : Text;
    hours : Text;
  };

  type LeadForm = {
    fullName : Text;
    phoneNumber : Text;
    city : Text;
    requirement : Text;
    plotSize : ?Text;
    message : ?Text;
    submittedAt : Time.Time;
  };

  type LeadFormResponse = {
    fullName : Text;
    phoneNumber : Text;
    city : Text;
    requirement : Text;
    plotSize : ?Text;
    message : ?Text;
  };

  // Persistent store for lead forms
  let leadFormsMap = Map.empty<Text, LeadForm>();

  let contactDetails : ContactDetails = {
    address = "Ricco Industrial Area, Sujangarh, Rajasthan – 331507";
    phones = ["+91 7734920728", "+91 7297963005"];
    whatsapp = "+91 7734920728";
    email = "ccsolutions0055@gmail.com";
    hours = "Mon – Sat: 08:00 AM – 06:00 PM";
  };

  public query ({ caller }) func getContactDetails() : async ContactDetails {
    contactDetails;
  };

  public query ({ caller }) func getAllLeads() : async [LeadFormResponse] {
    leadFormsMap.values().toArray().map(
      func(lead) {
        {
          fullName = lead.fullName;
          phoneNumber = lead.phoneNumber;
          city = lead.city;
          requirement = lead.requirement;
          plotSize = lead.plotSize;
          message = lead.message;
        };
      }
    );
  };

  public query ({ caller }) func getLeadByPhoneNumber(phoneNumber : Text) : async ?LeadFormResponse {
    switch (leadFormsMap.get(phoneNumber)) {
      case (null) { null };
      case (?lead) {
        ?{
          fullName = lead.fullName;
          phoneNumber = lead.phoneNumber;
          city = lead.city;
          requirement = lead.requirement;
          plotSize = lead.plotSize;
          message = lead.message;
        };
      };
    };
  };

  public shared ({ caller }) func submitLeadForm(
    fullName : Text,
    phoneNumber : Text,
    city : Text,
    requirement : Text,
    plotSize : ?Text,
    message : ?Text,
  ) : async Bool {
    let key = fullName # " " # phoneNumber # city;
    let newLead : LeadForm = {
      fullName;
      phoneNumber;
      city;
      requirement;
      plotSize;
      message;
      submittedAt = Time.now();
    };

    leadFormsMap.add(key, newLead);
    true;
  };
};

---
id: Data_Verification_Steps
title: 2.5. Data Verification Steps
sidebar_label: Data Verification Steps
---

To ensure the accuracy and validity of data in the system, several layers of checks can be implemented.

## 2.5.1. Input Checks
MCOMS applications may restrict the range of input to different data fields. Different mechanisms will be appropriate for different occasions. For example:

* Dropdown lists ensure the user can only select from a limited set of options, for example the list of plant names (so the user cannot write in an invalid name)
* Limited input value, where only certain inputs are deemed valid – for example, an energy meter reading must be greater than the previous reading to be registered as valid

## 2.5.2. User Review
The MCOMS applications invite users to review and confirm all information that they input into the applications, before submitting it to the central database.

## 2.5.3. Database Edit
Many database entries can be amended from the front-end of the web platform, provided the user has the appropriate access rights.

## 2.5.4. Change Logs
All edits to MCOMS databases are logged, along with the timestamp of the change and which user made the change. This ensures that all data can be restored in the case of accident, and it also gaurds against malicious meddling with stored information.

## 2.5.5. Numerical Checks
Certain automated checks are programmed into the MCOMS server to ensure that database entries make sense. An example would be ensuring that equipment efficiencies are between 0% and 100%, or that daily energy generation falls within expected ranges. There is some overlap between this and the checks in Section 2.5.1; the difference is that here, database calculations are scheduled on the server side, whereas in Section 2.5.1 the input into the database is restricted before it is submitted.

## 2.5.6. Customer Validation
Where changes to customer information, or updates of customer accounts are involved, MCOMS will frequently require the customer themselves to validate the change. A common way to do this is for the customer to confirm the change with an OTP sent to their registered mobile number.

## 2.5.7. Chain of Approvals
Many operational workflows discussed in this chapter involve multiple levels of the mini-grid organisational hierarchy. For such multi-person processes, MCOMS automatically notifies different personnel when their input, approval, or action is needed.

For example, to change a customer’s package, a customer must first submit a request, which passes to the cluster in-charge, who may push the request to a CSA for follow-up with the customer before approving it and handing over to a technician for implementation. Once the technician marks the task as complete, the cluster in-charge is notified; they must confirm that the work has been done properly, after which the change is finalised and logged in the central database for the state in-charge and upper management to see in their monthly reports.


## 2.5.8. Data Audit
Data audits represent an important consistency check of the MCOMS database. Independent in-situ copies of certain field data may be compared with values in the central database to ensure agreement. For example, the daily solar energy generation values are recorded through the field agent app and also noted down manually in a register in the plant control room. The cluster in-charge can compare the two records for consistency. 
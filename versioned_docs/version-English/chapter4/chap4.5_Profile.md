---
id: Profile
title: 4.5. Profile
sidebar_label: Profile
---

import useBaseUrl from '@docusaurus/useBaseUrl';
export const Clear = ({children}) => (
  <div
    style={{ 
         display: 'table',
    }}>
    {children}
  </div>
);

**Functionality**
* The Profile page gives the user access to their account details.
* This includes personal information, past payments, and energy consumption.

| Profile| Payments| Meter Readings|
|---|---|---|
| Consists of profile details of the consumer| Chronological list of individual payments| Chronological record of energy consumption|


## 4.5.1. Profile
**Functionality**
* The Profile section contains important profile information of the user

**Page Details**

<br clear="right"/>
<img align="left" src={useBaseUrl("img/scrnshts/4.5.1_Profile.png")} alt="Profile" width="45%"/>
<Clear>

1.  <u>Navigation Bar</u> indicates the current tab and allows switching between tabs

    ![Left Right Nav](/img/scrnshts/App_LeftRightNav.png)

2.  <u>Basic Profile</u> that consists of information on the user
3.  <u>Connection Details</u> shows the customer's electricity package details
4.  <u>Mobile</u> number linked to the account

</Clear>
<br clear="both"/>


<!-- ![Profile](./assets/4.10_Profile.png) -->


## 4.5.2. Payments
**Functionality**
* The Payments page gives a chronological record of bills issued to the customer, and payments they have made

**Page Details**

<br clear="right"/>
<img align="left" src={useBaseUrl("img/scrnshts/4.5.2_Payment.png")} alt="Payments" width="45%"/>
<Clear>

1.  <u>Navigation Bar</u> indicates the current tab and allows switching between tabs
2.  <u>Payments List</u> itemises and timestamps all payments made by the customer, along with other relevant information concerning the bill

</Clear>
<br clear="both"/>


<!-- ![Payments](./assets/4.11_Payments.png) -->


## 4.5.3. Meter Readings
**Functionality**
* The Meter Reading page give a chronological list of the customer’s energy consumption.
* The frequency of meter readings will vary depending on their connection type.

**Page Details**

<br clear="right"/>
<img align="left" src={useBaseUrl("img/scrnshts/4.5.3_MeterReading.png")} alt="Meter Reading" width="45%"/>
<Clear>

1.  <u>Navigation Bar</u> indicates the current tab and allows switching between tabs
2.  <u>Meter Reading</u> details shown in a chronological order along with other relevant information concerning the meter reading
3.  <u>Meter Number</u> can be chosen in case the customer has multiple connections

</Clear>
<br clear="both"/>

<!-- ![Meter Reading](./assets/4.12_MeterReading.png) -->


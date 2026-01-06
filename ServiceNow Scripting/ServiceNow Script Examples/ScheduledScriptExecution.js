// LAB 6.3.1 - Scheduled Script Execution and email

var pickUpLeadTime =
  gs.getProperty("x_cdltd_loaner_r_0.pickup.leadtime", 24) * 60 * 60 * 1000;
var noticeTime = new GlideDateTime();
noticeTime.add(pickUpLeadTime);
// The above block ensures the GlideRecord query finds the records that are due up in the span specified by the leadtime property

var gr = new GlideRecord("x_cdltd_loaner_r_0_loaner_request");
gr.addQuery("state", 16); // 16 is ready for pickup
gr.addQuery("pick_up_reminder", "");
gr.addQuery("start_date", "<=", noticeTime);
gr.query();
// the above GR query looks for LNR records which:
// (1) are in state "Ready for Pickup"
// (2) haven't already generated a reminder
// (3) are within the acceptable span for pickup

var rightNow = new GlideDateTime();

while (gr.next()) {
  gr.pick_up_reminder = rightNow; // update each record that was returned by the query
  // update each LNR so we don't spam the requesters (see line 9, above)
  gr.update();
  gs.eventQueue("x_cdltd_loaner_r_0.pickUp", gr, gr.number, gs.getUserName());
  // fire the event to trigger the email notification!
}

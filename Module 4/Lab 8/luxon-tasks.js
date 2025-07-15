(function () {
  // create a shortcut and a new Luxon date
  const DateTime = luxon.DateTime;
  let nowLuxon = DateTime.now();

  let eDisplayLuxon = document.getElementById("displayLuxon");
  eDisplayLuxon.innerHTML = `<p>Unformatted date: ${nowLuxon}</p>`;

  let formatted = nowLuxon.toFormat("MMMM dd, yyyy");
  eDisplayLuxon.innerHTML += `<p>Formatted date: ${formatted}</p>`;

  let newYork = nowLuxon
    .setZone("America/New_York")
    .toLocaleString(DateTime.DATETIME_FULL);
  eDisplayLuxon.innerHTML += `<p>New York date: ${newYork}</p>`;

  // Luxon tasks
  const birthdate = DateTime.fromISO("1990-01-01");
  const now = DateTime.now();
  const luxonTasks = document.getElementById("luxonTasks");

  // 1. Days between birthdate and now
  const daysBetween = Math.floor(now.diff(birthdate, "days").days);
  luxonTasks.innerHTML += `<p><b>Days between birthdate and now:</b> ${daysBetween} days</p>`;

  // 2. Years, months, days between birthdate and now
  const diffObj = now.diff(birthdate, ["years", "months", "days"]).toObject();
  luxonTasks.innerHTML += `<p><b>Difference:</b> ${Math.floor(
    diffObj.years
  )} years, ${Math.floor(diffObj.months)} months, and ${Math.floor(
    diffObj.days
  )} days</p>`;

  // 3. Closest date to now
  const dateA = DateTime.fromISO("2025-07-01");
  const dateB = DateTime.fromISO("2025-07-20");
  const closest =
    Math.abs(now.diff(dateA).milliseconds) <
    Math.abs(now.diff(dateB).milliseconds)
      ? dateA
      : dateB;
  luxonTasks.innerHTML += `<p><b>Closest to now:</b> ${closest.toFormat(
    "MMMM dd, yyyy"
  )}</p>`;

  // 4. Is first date before or after second date
  const first = DateTime.fromISO("2025-07-01");
  const second = DateTime.fromISO("2025-07-20");
  const compare = first < second ? "before" : "after";
  luxonTasks.innerHTML += `<p><b>First date is:</b> ${compare} the second date</p>`;

  // 5. Current time in London
  const londonTime = now
    .setZone("Europe/London")
    .toLocaleString(DateTime.TIME_WITH_SECONDS);
  luxonTasks.innerHTML += `<p><b>Current time in London:</b> ${londonTime}</p>`;
})();

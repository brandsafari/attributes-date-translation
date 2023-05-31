window.Webflow ||= []
window.Webflow.push(() => {
   const data = {
      months: {
         en: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
         ],
         local: [],
      },
      days: {
         en: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
         local: [],
      },
   }

   data.months.local = [
      "Januar",
      "Februar",
      "März",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember",
   ]
   data.days.local = [
      "Montag",
      "Dienstag",
      "Mittwoch",
      "Donnerstag",
      "Freitag",
      "Samstag",
      "Sonntag",
   ]

   if (data.months.local.length !== 12) {
      console.error("Months are incorrect! Check your script.")
   }
   if (data.days.local.length !== 7) {
      console.error("Days are incorrect! Check your script.")
   }

   const shortenDaysMonths = (daymonth) => daymonth.substring(0, 3)
   const convertToLocal = (daydate, whatToConvert) => {
      whatToConvert.forEach((theObject) => {
         let text = theObject.textContent

         if (daydate === "m" || daydate === "month" || daydate === "months") {
            for (let i = 0; i < data.months.en.length; i++) {
               text = text.replace(data.months.en[i], data.months.local[i])
               text = text.replace(
                  shortenDaysMonths(data.months.en[i]),
                  shortenDaysMonths(data.months.local[i])
               )
               theObject.textContent = text
            }
         } else if (daydate === "d" || daydate === "day" || daydate === "days") {
            for (let i = 0; i < data.days.en.length; i++) {
               text = text.replace(data.days.en[i], data.days.local[i])
               text = text.replace(
                  shortenDaysMonths(data.days.en[i]),
                  shortenDaysMonths(data.days.local[i])
               )
               theObject.textContent = text
            }
         }
      })
   }

   const allDates = [
      ...Array.from(document.querySelectorAll(".dateclass")),
      ...Array.from(document.querySelectorAll("[brs-datetranslation='date']")),
   ]
   const allDays = [
      ...Array.from(document.querySelectorAll(".dayclass")),
      ...Array.from(document.querySelectorAll("[brs-datetranslation='day']")),
   ]

   convertToLocal("m", allDates)
   convertToLocal("d", allDays)

   // Compatibility with Finsweet CMS Load
   window.fsAttributes ||= []
   window.fsAttributes.push([
      "cmsload",
      (listInstances) => {
         for (const li of listInstances) {
            // The `renderitems` event runs whenever the list renders items after switching pages.
            li.on("renderitems", () => {
               const listElement = li.list
               if (!listElement) return

               const allDates = [
                  ...Array.from(document.querySelectorAll(".dateclass")),
                  ...Array.from(document.querySelectorAll("[brs-datetranslation='date']")),
               ]
               const allDays = [
                  ...Array.from(document.querySelectorAll(".dayclass")),
                  ...Array.from(document.querySelectorAll("[brs-datetranslation='day']")),
               ]

               convertToLocal("m", allDates)
               convertToLocal("d", allDays)
            })
         }
      },
   ])
})

(()=>{window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{let r={months:{en:["January","February","March","April","May","June","July","August","September","October","November","December"],local:[]},days:{en:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],local:[]}};r.months.local=["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],r.days.local=["Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag","Sonntag"],r.months.local.length!==12&&console.error("Months are incorrect! Check your script."),r.days.local.length!==7&&console.error("Days are incorrect! Check your script.");let l=o=>o.substring(0,3),a=(o,n)=>{n.forEach(s=>{let t=s.textContent;if(o==="m"||o==="month"||o==="months")for(let e=0;e<r.months.en.length;e++)t=t.replace(r.months.en[e],r.months.local[e]),t=t.replace(l(r.months.en[e]),l(r.months.local[e])),s.textContent=t;else if(o==="d"||o==="day"||o==="days")for(let e=0;e<r.days.en.length;e++)t=t.replace(r.days.en[e],r.days.local[e]),t=t.replace(l(r.days.en[e]),l(r.days.local[e])),s.textContent=t})},c=[...Array.from(document.querySelectorAll(".dateclass")),...Array.from(document.querySelectorAll("[brs-datetranslation='date']"))],y=[...Array.from(document.querySelectorAll(".dayclass")),...Array.from(document.querySelectorAll("[brs-datetranslation='day']"))];a("m",c),a("d",y),window.fsAttributes||(window.fsAttributes=[]),window.fsAttributes.push(["cmsload",o=>{for(let n of o)n.on("renderitems",()=>{if(!n.list)return;let t=[...Array.from(document.querySelectorAll(".dateclass")),...Array.from(document.querySelectorAll("[brs-datetranslation='date']"))],e=[...Array.from(document.querySelectorAll(".dayclass")),...Array.from(document.querySelectorAll("[brs-datetranslation='day']"))];a("m",t),a("d",e)})}])});})();

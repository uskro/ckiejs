const ckie = {
	c: {
		e: function(msg) {
			console.error("ckiejs: "+msg+".");
		},
		w: function(msg) {
			console.warn("ckiejs: "+msg+".");
		},
		i: function(msg) {
			console.info("ckiejs: "+msg+".");
		},
		l: function(m) {
			console.log(m);
		}
	},
	info: function() {
		ckie.c.l("ckie.js, simple and straightforward cookie management with JavaScript.");
	},
	set: function(cname,cvalue,xdays) {
		if(xdays != 0 && xdays != "0" && xdays != null && xdays != undefined) {
			var d = new Date();
			d.setTime(d.getTime() + (xdays*24*60*60*1000));
			var expires = "expires="+ d.toUTCString();
			document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
		}
		else document.cookie = cname + "=" + cvalue + ";path=/";
		ckie.c.i(cname+" was set as "+cvalue);
	},
	get: function(cname) {
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for(var i = 0; i <ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return decodeURI(c.substring(name.length, c.length));
			}
		}
		return null;
	},
	del: function(cname) {
		ckie.set(cname,"",1);
		ckie.c.i(cname+" was deleted");
	}
}

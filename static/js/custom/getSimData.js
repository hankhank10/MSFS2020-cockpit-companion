let altitude;
let fuel_percentage;
let vertical_speed;
let compass;
let airspeed;
let latitude;
let longitude;

let fuel_pump;
let pitot_heat;
let panel_anti_ice_sw;

let light_strobe;
let light_landing;
let light_nav;
let light_taxi;
let light_beacon;
let light_logo;
let light_recognition;
let light_wing;
let light_cabin;
let light_panel;

let com1_active;
let com1_stby;
let com2_active;
let com2_stby;
let nav1_active;
let nav1_stby;
let nav2_active;
let nav2_stby;

let autopilot_master;
let autopilot_nav_selected;
let autopilot_wing_leveler;
let autopilot_heading_lock;
let autopilot_heading_lock_dir;
let autopilot_altitude_lock;
let autopilot_altitude_lock_var;
let autopilot_attitude_hold;
let autopilot_glidescope_hold;
let autopilot_approach_hold;
let autopilot_backcourse_hold;
let autopilot_vertical_hold;
let autopilot_vertical_hold_var;
let autopilot_pitch_hold;
let autopilot_pitch_hold_ref;
let autopilot_flight_director_active;
let autopilot_airspeed_hold;
let autopilot_airspeed_hold_var;

let gear_handle_position;
let elevator_trim_pct;
let elevator_trim_pct_reversed;
let rudder_trim_pct;
let flaps_handle_pct;
let flaps_handle_pct_reversed;

let cabin_seatbelts_alert_switch;
let cabin_no_smoking_alert_switch;

window.setInterval(function(){
    getSimulatorData();
    displayData()
    updateMap()
}, 2000);


function getSimulatorData() {
    $.getJSON($SCRIPT_ROOT + '/ui', {}, function(data) {

        console.log(data)

        //Navigation
        altitude = data.ALTITUDE;
        vertical_speed = data.VERTICAL_SPEED;
        compass = data.MAGNETIC_COMPASS;
        airspeed = data.AIRSPEED_INDICATE;
        latitude = data.LATITUDE;
        longitude = data.LONGITUDE;

        // Switches
        panel_anti_ice_sw = data.PANEL_ANTI_ICE_SWITCH
        pitot_heat = data.PITOT_HEAT
        fuel_pump = data.GENERAL_ENG_FUEL_PUMP_SWITCH

        // Lights
        light_strobe = data.LIGHT_STROBE
        light_landing = data.LIGHT_LANDING
        light_nav = data.LIGHT_NAV
        light_taxi = data.LIGHT_TAXI
        light_beacon = data.LIGHT_BEACON
        light_logo = data.LIGHT_LOGO
        light_recognition = data.LIGHT_RECOGNITION
        light_wing = data.LIGHT_WING
        light_cabin = data.LIGHT_CABIN
        light_panel = data.LIGHT_PANEL

        //Fuel
        fuel_percentage = data.FUEL_PERCENTAGE;

        //Autopilot
        autopilot_master = data.AUTOPILOT_MASTER;
        autopilot_nav_selected = data.AUTOPILOT_NAV_SELECTED;
        autopilot_wing_leveler = data.AUTOPILOT_WING_LEVELER;
        autopilot_heading_lock = data.AUTOPILOT_HEADING_LOCK;
        autopilot_heading_lock_dir = data.AUTOPILOT_HEADING_LOCK_DIR;
        autopilot_altitude_lock = data.AUTOPILOT_ALTITUDE_LOCK;
        autopilot_altitude_lock_var = data.AUTOPILOT_ALTITUDE_LOCK_VAR;
        autopilot_attitude_hold = data.AUTOPILOT_ATTITUDE_HOLD;
        autopilot_glidescope_hold = data.AUTOPILOT_GLIDESLOPE_HOLD;
        autopilot_approach_hold = data.AUTOPILOT_APPROACH_HOLD;
        autopilot_backcourse_hold = data.AUTOPILOT_BACKCOURSE_HOLD;
        autopilot_vertical_hold = data.AUTOPILOT_VERTICAL_HOLD
        autopilot_vertical_hold_var = data.AUTOPILOT_VERTICAL_HOLD_VAR;
        autopilot_pitch_hold = data.AUTOPILOT_PITCH_HOLD;
        autopilot_pitch_hold_ref = data.AUTOPILOT_PITCH_HOLD_REF;
        autopilot_flight_director_active = data.AUTOPILOT_FLIGHT_DIRECTOR_ACTIVE;
        autopilot_airspeed_hold = data.AUTOPILOT_AIRSPEED_HOLD;
        autopilot_airspeed_hold_var = data.AUTOPILOT_AIRSPEED_HOLD_VAR;

        // Radios
        com1_active = data.COM_ACTIVE_FREQUENCY1;
        com1_stby = data.COM_STANDBY_FREQUENCY1;
        com2_active = data.COM_ACTIVE_FREQUENCY2;
        com2_stby = data.COM_STANDBY_FREQUENCY2;
        nav1_active = data.NAV_ACTIVE_FREQUENCY1;
        nav1_stby = data.NAV_STANDBY_FREQUENCY1;
        nav2_active = data.NAV_ACTIVE_FREQUENCY2;
        nav2_stby = data.NAV_STANDBY_FREQUENCY2;

        //Control surfaces
        gear_handle_position = data.GEAR_HANDLE_POSITION;
        elevator_trim_pct = data.ELEVATOR_TRIM_PCT;
        elevator_trim_pct_reversed = - elevator_trim_pct
        //rudder_trim_pct = data.RUDDER_TRIM_PCT;
        flaps_handle_pct = data.FLAPS_HANDLE_PERCENT;
        flaps_handle_pct_reversed = - flaps_handle_pct;

        //Cabin
        cabin_no_smoking_alert_switch = data.CABIN_NO_SMOKING_ALERT_SWITCH;
        cabin_seatbelts_alert_switch = data.CABIN_SEATBELTS_ALERT_SWITCH;

    });
    return false;
}


function displayData() {
    //Navigation
    $("#altitude").text(altitude);
    $("#compass").text(compass);
    $("#vertical-speed").text(vertical_speed);
    $("#airspeed").text(airspeed);

    //Fuel
    $("#fuel-percentage").text(fuel_percentage);
    $("#fuel-percentage-bar").css("width", fuel_percentage+"%");

    //Autopilot
    checkAndUpdateButton("#autopilot-master", autopilot_master, "Engaged", "Disengaged");
    checkAndUpdateButton("#autopilot-wing-leveler", autopilot_wing_leveler);
    checkAndUpdateButton("#autopilot-heading-lock", autopilot_heading_lock);
    checkAndUpdateButton("#autopilot-altitude-lock", autopilot_altitude_lock);
    checkAndUpdateButton("#autopilot-airspeed-hold", autopilot_airspeed_hold);
    checkAndUpdateButton("#autopilot-attitude-hold", autopilot_attitude_hold);
    checkAndUpdateButton("#autopilot-backcourse-hold", autopilot_backcourse_hold);
    checkAndUpdateButton("#autopilot-approach-hold", autopilot_approach_hold);
    checkAndUpdateButton("#autopilot-vertical-hold", autopilot_vertical_hold);

    $("#autopilot-heading-lock-dir").attr('placeholder', autopilot_heading_lock_dir);
    $("#autopilot-altitude-lock-var").attr('placeholder', autopilot_altitude_lock_var);
    $("#autopilot-airspeed-hold-var").attr('placeholder', autopilot_airspeed_hold_var);
    $("#autopilot-pitch-hold-ref").attr('placeholder', autopilot_pitch_hold_ref);
    $("#autopilot-vertical-hold-ref").attr('placeholder', autopilot_vertical_hold_var);

    //Control surfaces
    $("#gear-handle-position").html(gear_handle_position);
    if (gear_handle_position === "UP"){
        $("#gear-handle-position").removeClass("btn-success").addClass("btn-danger");
    } else {
        $("#gear-handle-position").removeClass("btn-danger").addClass("btn-success");
    }

    $("#flaps-handle-pct").text(flaps_handle_pct);
    $("#flaps-slider").slider({values: [flaps_handle_pct_reversed]})

    $("#elevator-trim-pct").text(elevator_trim_pct);
    $("#elevator-trim-slider").slider({values: [elevator_trim_pct_reversed]})

    $("#rudder-trim-pct").text(rudder_trim_pct);
    $("#rudder-trim-slider").slider({values: [rudder_trim_pct]})


    //Switches
    if (fuel_pump === 1) {
        $("#fuel_pump").removeClass("btn-outline-danger").addClass("btn-danger").html("Fuel pump on");
    } else {
        $("#fuel_pump").removeClass("btn-danger").addClass("btn-outline-danger").html("Fuel pump off");
    }
    if (panel_anti_ice_sw === 1) {
        $("#anti-ice").removeClass("btn-outline-danger").addClass("btn-danger").html("Anti-ice on");
    } else {
        $("#anti-ice").removeClass("btn-danger").addClass("btn-outline-danger").html("Anti-ice off");
    }
    if (pitot_heat === 1) {
        $("#pitot-heat").removeClass("btn-outline-danger").addClass("btn-danger").html("Pitot heat on");
    } else {
        $("#pitot-heat").removeClass("btn-danger").addClass("btn-outline-danger").html("Pitot heat off");
    }

    // Radios
    $("#com1_active").val(com1_active.toFixed(3))
    $("#com1_stby").val(com1_stby.toFixed(3))
    $("#com2_active").val(com2_active.toFixed(3))
    $("#com2_stby").val(com2_stby.toFixed(3))
    $("#nav1_active").val(nav1_active.toFixed(3))
    $("#nav1_stby").val(nav1_stby.toFixed(3))
    $("#nav2_active").val(nav2_active.toFixed(3))
    $("#nav2_stby").val(nav2_stby.toFixed(3))

    //Lights
    $("#strobes_toggle").checked = light_strobe
    $("#landing_lights_toggle").checked = light_landing
    $("#toggle_nav_lights").checked = light_nav
    $("#toggle_taxi_lights").checked = light_taxi
    $("#toggle_beacon_lights").checked = light_beacon
    $("#toggle_logo_lights").checked = light_logo
    $("#toggle_recognition_lights").checked = light_recognition
    $("#toggle_wing_lights").checked = light_wing
    $("#toggle_cabin_lights").checked = light_cabin
    $("#toggle_panel_lights").checked = light_panel
    /*
    if (light_strobe === 1) {
        $("#strobes_toggle").removeClass("btn-outline-danger").addClass("btn-danger").html("Strobes on");
    } else {
        $("#strobes_toggle").removeClass("btn-danger").addClass("btn-outline-danger").html("Strobes off");
    }
    if (light_landing === 1) {
        $("#landing_lights_toggle").removeClass("btn-outline-danger").addClass("btn-danger").html("Landing lights on");
    } else {
        $("#landing_lights_toggle").removeClass("btn-danger").addClass("btn-outline-danger").html("Landing lights off");
    }
    if (light_nav === 1) {
        $("#toggle_nav_lights").removeClass("btn-outline-danger").addClass("btn-danger").html("Nav lights on");
    } else {
        $("#toggle_nav_lights").removeClass("btn-danger").addClass("btn-outline-danger").html("Nav lights off");
    }
    if (light_taxi === 1) {
        $("#toggle_taxi_lights").removeClass("btn-outline-danger").addClass("btn-danger").html("Taxi lights on");
    } else {
        $("#toggle_taxi_lights").removeClass("btn-danger").addClass("btn-outline-danger").html("Taxi lights off");
    }
    if (light_beacon === 1) {
        $("#toggle_beacon_lights").removeClass("btn-outline-danger").addClass("btn-danger").html("Beacon lights on");
    } else {
        $("#toggle_beacon_lights").removeClass("btn-danger").addClass("btn-outline-danger").html("Beacon lights off");
    }
    if (light_logo === 1) {
        $("#toggle_logo_lights").removeClass("btn-outline-danger").addClass("btn-danger").html("Logo lights on");
    } else {
        $("#toggle_logo_lights").removeClass("btn-danger").addClass("btn-outline-danger").html("Logo lights off");
    }
    if (light_recognition === 1) {
        $("#toggle_recognition_lights").removeClass("btn-outline-danger").addClass("btn-danger").html("Recognition lights on");
    } else {
        $("#toggle_recognition_lights").removeClass("btn-danger").addClass("btn-outline-danger").html("Recognition lights off");
    }
    if (light_wing === 1) {
        $("#toggle_wing_lights").removeClass("btn-outline-danger").addClass("btn-danger").html("Wing lights on");
    } else {
        $("#toggle_wing_lights").removeClass("btn-danger").addClass("btn-outline-danger").html("Wing lights off");
    }
    if (light_cabin === 1) {
        $("#toggle_cabin_lights").removeClass("btn-outline-danger").addClass("btn-danger").html("Cabin lights on");
    } else {
        $("#toggle_cabin_lights").removeClass("btn-danger").addClass("btn-outline-danger").html("Cabin lights off");
    }
    if (light_panel === 1) {
        $("#toggle_panel_lights").removeClass("btn-outline-danger").addClass("btn-danger").html("Panel lights on");
    } else {
        $("#toggle_panel_lights").removeClass("btn-danger").addClass("btn-outline-danger").html("Panel lights off");
    }*/

    //Cabin
    if (cabin_seatbelts_alert_switch === 1){
        $("#seatbelt-sign").removeClass("btn-outline-danger").addClass("btn-danger").html("Seatbelt sign on");
    } else {
        $("#seatbelt-sign").removeClass("btn-danger").addClass("btn-outline-danger").html("Seatbelt sign off");
    }

    if (cabin_no_smoking_alert_switch === 1){
        $("#no-smoking-sign").removeClass("btn-outline-danger").addClass("btn-danger").html("No smoking sign on");
    } else {
        $("#no-smoking-sign").removeClass("btn-danger").addClass("btn-outline-danger").html("No smoking sign off");
    }}

function checkAndUpdateButton(buttonName, variableToCheck, onText="On", offText="Off") {
    if (variableToCheck === 1) {
        $(buttonName).removeClass("btn-danger").addClass("btn-success").html(onText);
    } else {
        $(buttonName).removeClass("btn-success").addClass("btn-danger").html(offText);
    }
}


function toggleFollowPlane() {
    followPlane = !followPlane;
    if (followPlane === true) {
        $("#followMode").text("Moving map enabled")
        $("#followModeButton").removeClass("btn-outline-danger").addClass("btn-primary")
    }
    if (followPlane === false) {
        $("#followMode").text("Moving map disabled")
        $("#followModeButton").removeClass("btn-primary").addClass("btn-outline-danger")
    }
}
function mapSwitch() {
    $("#map_column").toggle();
}

function updateMap() {
    if ((typeof latitude === 'undefined') || (typeof longitude === 'undefined')) {
        return
    }

    marker.slideTo(	[latitude, longitude], {
        duration: 1500,
    });
    marker.setRotationAngle(compass);

    if (followPlane === true) {
        map.panTo([latitude, longitude]);
    }
}

function setSimDatapoint(datapointToSet, valueToUse) {
    url_to_call = "/datapoint/"+datapointToSet+"/set";
    $.post( url_to_call, { value_to_use: valueToUse } );
}

function triggerSimEvent(eventToTrigger, valueToUse, hideAlert = false){
    url_to_call = "/event/" + eventToTrigger + "/trigger";
    console.log(url_to_call)
    $.post( url_to_call, { value_to_use: valueToUse } );

    if (!hideAlert) {
        temporaryAlert('', "Sending instruction", "success")
    }
}

function triggerSimEventFromField(eventToTrigger, fieldToUse, messageToDisplay = null){
    // Get the field and the value in there
    fieldToUse = "#" + fieldToUse
    valueToUse = $(fieldToUse).val();

    // Pass it to the API
    url_to_call = "/event/"+eventToTrigger+"/trigger";
    $.post( url_to_call, { value_to_use: valueToUse } );

    // Clear the field so it can be repopulated with the placeholder
    $(fieldToUse).val("")

    if (messageToDisplay) {
        temporaryAlert('', messageToDisplay + " to " + valueToUse, "success")
    }

}

function triggerCustomEmergency(emergency_type) {
    url_to_call = "/custom_emergency/" + emergency_type
    $.post (url_to_call)

    if (emergency_type === "random_engine_fire") {
        temporaryAlert("Fire!", "Random engine fire trigger sent", "error")
    }
}


function temporaryAlert(title, message, icon) {
    let timerInterval

    Swal.fire({
        title: title,
        html: message,
        icon: icon,
        timer: 2000,
        timerProgressBar: true,
        onBeforeOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
                const content = Swal.getContent()
                if (content) {
                    const b = content.querySelector('b')
                    if (b) {
                        b.textContent = Swal.getTimerLeft()
                    }
                }
            }, 100)
        },
        onClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    })
}

import React from 'react'
import './Tenders.css'
import fire_tender from '../../assets/tenderbackground.png'
import water_tender from '../../assets/watertender.png'
import foam_tender from '../../assets/foamtender.png'
import brake_icon from '../../assets/brake.jpg'
import keypad_icon from '../../assets/keypad.jpg'
import gear_icon from '../../assets/gear.jpg'
import park_break from '../../assets/parking.jpg'
import climate_icon from '../../assets/climate.jpg'
import keypad_right from '../../assets/keyright.jpg'
import control_panel from '../../assets/control.jpg'
import functions_icon from '../../assets/modes.jpg'
import switch_icon from '../../assets/switch.jpg'
import driver_seat from '../../assets/driver.jpg'
import main_switch from '../../assets/main.jpg'
import dcp_1 from '../../assets/dcp1.png'
import dcp_2 from '../../assets/dcp2.png'
import dcp_3 from '../../assets/dcp3.png'
import dcp_4 from '../../assets/dcp4.png'
import multipurpose from '../../assets/multipurpose.png'
import et_items from '../../assets/etitems.png'
import eqp_1 from '../../assets/eqp1.png'
import eqp_2 from '../../assets/eqp2.png'
import eqp_3 from '../../assets/eqp3.png'
import eqp_4 from '../../assets/eqp4.png'
import eqp_5 from '../../assets/eqp5.png'
import equipment_truck from '../../assets/equipmentt.png'
import tender_details from '../../assets/tenderdetails.png'


const Tenders = () => {
  return (
    <div className="tenders">
        <h1>MOBILE FIRE EQUIPMENTS DETAILS, OPERATIONS & TESTING</h1>
        <h3>Transfers fire extinguishers to the fire scene</h3>
        <div className="fire">
            <img src={fire_tender} alt="" />
            <div className="caption">
                <p>Fire tenders in refinery are from Bharat Benz, MAN and Volvo. </p>
                    <p>A detailed description will be done here for Bharat Benz, Man vehicle and Volvo.</p>
                    <p>This will lead us for a better knowledge of the mechanics for maintenance and repairs. </p>
            </div>
        </div>
        <div className="table">
            <h1>TENDER DETAILS</h1>
            <img src={tender_details} alt="" />
       
    </div>
    <div className="types">
        <h2>TYPES OF TENDERS</h2>
        <div className="foam">
            <img src={foam_tender} alt="" />
            <div className="caption-1">
                <h4>1.Foam Tenders ( FT-1/FT-2)</h4>
                <p>The foam tender is fabricated on diesel chassis in accordance with the specification of BIS: 951/1977 for the purpose of fire services operations. The unit is complete with a Rear Ship mounted centrifugal fire pump of 5000 LPM at 10 kg/ cm2 which is connected with the foam tank through around the pump Proportioner. It is also connected to the water tank with a suitable control valve. Pump gets the drive from full torque power take off which is mounted behind the gear box.</p>
            </div>
        </div>
        <div className="description">
            <h5>Operational Features</h5>
            <p>Before starting the fire engine, checkup the following items.
                <li>Pump is filled with SAE 40 oil.</li>
                <li>Power take off is filled with SAE 90 oil.</li>
                <li>Check oil in engine as well as engine gear box.</li>
                <li>Grease all the propeller shaft joints and sleeve yoke.</li>
                <li>Check all the nuts and bolts of propeller shaft, power take off and pump for tightness.</li>
                <li>The radiator water is full and Gear lever is in neutral.</li>
                <li>Hand brake is on and Engine stop control is in 'RUN' position.</li>
            </p>
        </div>
        <div className="operations">
        <div className="operations-left">
            <h5>Operation : Case I: Pumping Of Water from Water Tank:</h5>
            <p><li>After reaching the place of fire, tighten the suction blank cap and open the gate valve provided between the tank and the pump.</li>
            <li>Put the drive of the gear in 'Fourth Gear' by pressing the clutch pedal and also engage the power take-off lever for the pump drive and then release the clutch pedal slowly.</li>
            <li>Open inter cooling valve and The operator has to come near the pump and raise the engine throttle slightly and open the delivery valve slowly to which delivery hoses have been already connected.</li>
            <li>Throttle can be adjusted so as to get the required, pressure and Check incoming pressure on suction gauge (Vacuum gauge).</li></p>
            

            <h5>Operation : Case III: Pumping Foam Using Water Pressurized From Hydrant:</h5>
            <p><li>Make the supply of water to water tank VIA four hydrants to tank filling connections which are provided to the vehicle two on either side. The water tank is connected to the pump suction through a control valve.</li>
            <li>Close the suction blank cap air-tight, start the engine and engage the pump drive as mentioned in case - I.</li>
            <li>Open the tank to pump valve and raise the engine throttle and adjust to the required pressure.</li>
            <li>Open the valve connecting pump and the foam proportioner so that the water from the Pump passes through the foam proportioner.</li>
            <li>Open the delivery valve when the mixture of water and the foam compound passes through delivery hose. If the monitor is to be used, then the control valve provided on the control panel is to be operated. Foam inductor set at 3% automatically adjusts the flow of foam compound, depending upon the flow of water.</li></p>
            </div>
            <div className="operations-right">
                <h5>Operation : Case II: Pumping Of Water from Hydrant:</h5>
                <p><li>When the water is to be pumped from the hydrant a suction adapter or suction collecting head is to be connected to the suction side of the pump. The water li nes from the hydrant are to be connected to the suction adapter or the collecting head.</li>
                <li>The operation of the pump should be done as mentioned in case - I.</li></p>



                <h6>Operation : Case IV: Pumping Of Water from Water Tank: Foam Auxiliary Connections:</h6>
                <h7>Flushing Operation:</h7>
                <p>After using foam, the truck should be flushed with excess water including the firefighting equipment's used.
                    <li>Fill the water tank with fresh water.</li>
                    <li>Open up water tank to pump valve.</li>
                    <li>Engage pump and operate each system with fresh water.</li>
</p>
            </div>
            </div>
            <div className="technical">
                <h3> FOAM TENDER NO-3 and 5</h3>
                <p>This Foam Tender is built on Volvo FM 420 Chassis. It is fitted with a powerful centrifugal fire pump capable to give an output sufficient to deal with small & medium fires. The power transmission to the pump from the engine is through a power take off (PTO) fitted in between the pump and the engine.
The PTO is provided to transfer the power either to the pump or to the rear axle of chassis. A pneumatic control switch is provided in the driver's cabin within the approach of the driver for its operation
It is equipped with water tank of 4000 liters capacity and foam tank of 6000 liters capacity. The water can be discharged through a monitor and delivery valves to fight the fire. Provision also exists for replenishment of water, provided source for the same is within reach.
</p>
<h4>TECHNICAL DATA</h4>
<div className="datad">
    
    <p>
    <h5>1.PUMP:</h5>
    <li>Make	: GODIVA</li>
    <li>Type: Single stage, centrifugal type</li>
    <li>Material: GM casing with S.S. shaft.</li>
    <li>Capacity: 6000 LPM @ 10.0 kg/sq.cm</li>
    <li>Normal lift : 3 meter normal</li></p>

    <p>
    <h5>2.PRIMER:</h5>
    <li>Make: GODIVA</li>
    <li>Type: Reciprocating type.</li>
    <li>Lift: Capable of lifting water from 7 mtr within 24 seconds..</li></p>

    <p><h5>3.POWER TAKE-OFF:</h5>
    <li>Make: M/S OMSI.</li>
    <li>Type: Step up type.</li>
    <li>Speed ratio : 1:1.70
        </li></p>

        <p><h5>4.WATER TANK AND FOAM TANK</h5>
    <li>Water tank Capacity	: 4000 liters</li>
    <li>Foam Tank capacity	: 6000 liters.</li>
    <li>Material: SS 316 L
        </li></p>
</div>
            </div>
            <h2>Volvo Parts Operation </h2>
            <h4 className='braker'>Auxillary brakes</h4>
            <div className="parts">
                <div className="parts-left">
                    <img src={brake_icon} alt="" />
                </div>
                <div className="parts-right">
                    <p className='space'>1. A:- Automatic position</p>
                    <p className='space'>2. 0:-Auxiliary brake disengaged</p>
                    <p className='space'>3. 1-3:-Manual Positions</p>
                    <p className='space'>4. B Brake program Towards you Trailer brake</p>

                </div>
            </div>

            <h4 className='braker'>Keypad Left</h4>
            <div className="parts">
                <div className="parts-right">
                    <img src={keypad_icon} alt="" />
                </div>
                <div className="parts-right">
                    <p className='size' >1. Activate adaptive cruise control.</p>
                    <p className='size'>2.	Activate cruise control.</p>
                    <p className='size'>3.	Change distance.</p>
                    <p className='size'>4.	Disengage cruise control.</p>
                    <p className='size'>5.	Return to the previously set speed.</p>
                    <p className='size'> 6.	Change the permissible over speed.</p>
                    <p className='size'>7.	Answer phone.</p>
                    <p className='size'>8.	End call.</p>
                    <p className='size'>9.	Increase/decrease speed (up/down). Select speed (press).</p>


                </div>
            </div>

            <h4 className='braker'>Gear Selector</h4>

            <div className="parts">
                <div className="part-right">
                    <img src={gear_icon} alt="" />
                </div>
                <div className="parts-right">
                    <p className='space' >1.	Tilting the gear shift lever.</p>
                    <p className='space'>2.	+/-, change up or down in manual (M) and reverse (R) position, adjust gear in automatic position (A)</p>
                    <p className='space'>3.	Gear shift lever lock, prevents accidental engagement of the gears</p>
                    <p className='space'>4.	E/P change between economy and performance programs</p>
                    <p className='space'>5.	L, allows the vehicle to be moved in the event of a fault in the gearbox</p>
                </div>
            </div>


            <h4 className='braker'>Parking Brake</h4>

<div className="parts">
    <div className="parts-left">
        <img src={park_break} alt="" />
    </div>
    <div className="parts-right">
        <p className='space' >1.Activate the parking brake Pull the lever all the way out (past the click)</p>
        <p className='space'>2.Turn the key to the O position. The parking brake is activated. Disengage the parking brake</p>
        <p className='space'>3.Start the engine.</p>
        <p className='space'>4.Engage a gear.</p>
        <p className='space'>5.Depress the accelerator pedal. The parking brake is disengaged automatically. </p>
    </div>
</div>

<h4 className='braker'>Climate</h4>
            <div className="parts">
                <div className="parts-left1">
                    <img src={climate_icon} alt="" />
                </div>
                <div className="parts-right">
                    <p className='size' >1.	Fan speed knob</p>
                    <p className='size'>2.  Recirculation</p>
                    <p className='size'>3.	Display</p>
                    <p className='size'>4.	Defroster</p>
                    <p className='size'>5.	Temperature knob</p>
                    <p className='size'>6.	AUTO, controls all functions automatically</p>
                    <p className='size'>7.	Air distribution</p>
                    <p className='size'>8.	Air conditioning (AC)</p>
                    <p className='size'>9.	Parking heater Change track/search.</p>


                </div>
            </div>



            <h4 className='braker'>Keypad Right</h4>
            <div className="parts">
                <div className="parts-right">
                    <img src={keypad_right} alt="" />
                </div>
                <div className="parts-right">
                    <p className='size' >1. Focus change, display navigation.</p>
                    <p className='size'>2.  Change track/search</p>
                    <p className='size'>3.	Navigate left.</p>
                    <p className='size'>4.	Escape (cancel/go back)</p>
                    <p className='size'>5.	Navigate right</p>
                    <p className='size'>6.	Decrease audio volume.</p>
                    <p className='size'>7.	Increase audio volume.</p>
                    <p className='size'>8.  Navigate up/down. Confirm selection/OK (press).</p>
                </div>
            </div>

            <h4 className='braker'>Control Panel In Door</h4>
            <div className="parts">
                <div className="parts-left1">
                    <img src={control_panel} alt="" />
                </div>
                <div className="parts-right">
                    <p className='size' >1. Lock</p>
                    <p className='size'>2.  Unlock</p>
                    <p className='size'>3.	Electric window lift</p>
                    <p className='size'>4.	Joy pad for mirror adjustment</p>
                    <p className='size'>5.	Wide angle mirror, driver's, passenger</p>
                    <p className='size'>6.	Main mirror, driver's side, passenger side</p>
                    <p className='size'>7.	Heating</p>
                    <p className='size'>8.  Heated for 30 minutes</p>
                </div>
            </div>


            <h4 className='braker'>Functions Mode</h4>
            <div className="parts">
                <div className="parts-left1">
                    <img src={functions_icon} alt="" />
                </div>
                <div className="parts-right">
                    <p className='size' > Parked (0). Alarm and central locking active.<br/>
                     "Parked" is activated automatically after 12 hours when the key is in position "O" or is removed.</p>
                    <p className='size'>Living (0). Functions for living, Changes over to "Parked" after 12 hours.</p>
                    <p className='size'>Accessories (1). Work when the engine is switched off</p>
                    <p className='size'>Driving (2). All functions active Pre heat </p>
                    <p className='size'>Pre heat (3). Tum to spring-loaded position "3". Release and wait for the pre heat symbol to go out. </p>
                    <p className='size'>Crank (4). Engine start</p>
                </div>
            </div>


            <h4 className='braker'>Light Switch</h4>
            <div className="parts">
                <div className="parts-left1">
                    <img src={switch_icon} alt="" />
                </div>
                <div className="parts-right">
                    <p className='size' >1.	Instrument lighting day/night presets. Press the scroll wheel</p>
                    <p className='size'>2.Instrument lighting, dimmer.</p>
                    <p className='size'>3.Light switch,</p>
                    <p className='size'>4.Hazard warning lights. </p>
                    <p className='size'>5.Fog light rear. </p>
                    <p className='size'>6.Fog lights front.</p>
                    <p className='size'>A.	Position lights.
B.	Day Running Light
C.	Dipped bean/main beam.
D.	Main beam and auxiliary lamps (spotlights).
</p>
                </div>
            </div>

            <h4 className='braker'>Steering Wheel Settings</h4>
            <div className="parts">
                <div className="parts-left1">
                    <img src={functions_icon} alt="" />
                </div>
                <div className="parts-right">
                    <p className='space-1' > 1.Fully depress the pedal (1) in order to set the steering wheel vertically and lengthwise.</p>
                    <p className='space-1'>2.Depress the pedal (1) to the first position in order to set the steering wheel angle.</p>
                </div>
            </div>


            <h4 className='braker'>Driver Seat</h4>
            <div className="parts">
                <div className="parts-left1">
                    <img src={driver_seat} alt="" />
                </div>
                <div className="parts-right">
                    <p className='space' >1.Seat damping</p>
                    <p className='space'>2.Preset memories</p>
                    <p className='space'>3.	Tilt the seat and move the seat cushion lengthwise</p>
                    <p className='space'>4.	Seat ventilation (Optional equipment)</p>
                    <p className='space'>5.	Seat heating</p>
                    <p className='space'>6.	Upper section: Tilt the upper section of the backrest</p>
                </div>
            </div>

            <h4 className='braker'>Main Switch</h4>
            <div className="parts">
                <div className="parts-left1">
                    <img src={main_switch} alt="" />
                </div>
                <div className="parts-right">
                    <p className='space-1' > 1.Trickle charge regularly.</p>
                    <p className='space-1'>2.Use the "Parked" function mode as often as possible, do not deep-discharge the battery.</p>
                    <p className='space-1'>3. perform maintenance on the battery regularly</p>
                </div>
            </div>

            <div className="dcp">
            <img src={water_tender} alt="" />
            <div className="caption-1">
                <h4>2.DCP Tenders:</h4>
                <p>DRY CHEMICAL are scientifically developed and built with equipment of high standard to provide you maximum advantage in use, ease in operation and higher efficiency in working. Various technical tests have been carried out at our end. To make available to you the latest and up-to-date equipment</p>
            </div>
        </div>
       <div className="view">
        <div className="view-left">
            <h3>Hose Reel position in DCP tender</h3>
            <img className='ek' src={dcp_1} alt="" />
            <img className='do' src={dcp_3} alt="" />
        </div>
        <div className="view-right">
            <h3>Nitrogen Cylinder position in DCP tender</h3>
            <img className='ek' src={dcp_2} alt="" />
            <img className='do' src={dcp_4} alt="" />
        </div>
       </div>

       <div className="multipurpose">
            <img src={multipurpose} alt="" />
            <div className="caption-1">
                <h4>3.Multipurpose Tenders:</h4>
                <p>Fabricated on “BHARAT BENZ 2523” Chassis is mainly designed for Complete Solution for water supply /Foam supply(NURSER) / Fire Fighting with foam during fire calls and firefighting at critical situations with optimum manpower .
For this purpose, it contains water tank 0f 10000ltrs, foam tank of 1000ltrs. Water tower system and wireless remote control to be operated by minimum manpower and effective work efficiency and without manual risks.
The equipment consist of Fire pump of 4500LPM@8.5-17Bar pressure with FOAM mixing , the tender can be converted in FOAM NURSER during such situations , can be used for water supply as brouser can be used for hi range fire fighting with the help of WATER TOWER MONITOR SYSTEM.
</p>
            </div>
            </div>

            <div className="equipmetska">
                <h2>STEP-BY-STEP OPERATING INSTRUCTION OF WATER TOWER FIRE TRUCK</h2>
                <img src={eqp_1} alt="" />
            </div>
            <div className="divider">
            <img src={eqp_2} alt="" />

            </div>
            
            <div className="divider">
            <img src={eqp_3} alt="" />

            </div>
                <div className="divider">
                <img src={eqp_4} alt="" />
                </div>
                
                <div className="divider">
                <img src={eqp_5} alt="" />

                </div>

                <div className="equipmenttruck">
            <img src={equipment_truck} alt="" />
            <div className="caption-1">
                <h4>4.Equipment Truck:</h4>
                <p>This Equipment Truck is completely indigenously developed on MAN 25. 280 chassis to prove its effectiveness in most the challenging operation al conditions. Before starting the
engine make sure that:
<li>The radiator is full</li>
<li>Engine oil level is correct</li>
<li>Gear lever is in neutral</li>
<li>Hand brake is on</li>
</p>
            </div>
            </div>
            <div className="tables">
                <h2>ET ITEMS</h2>
                <img src={et_items} alt="" />
            </div>
    </div>
    </div>
  );
};
export default Tenders
import React from 'react';
import './styles.css'

import PhoneInput from 'react-phone-input-2';
// import "react-phone-input-2/lib/style.css";

const PhoneNumberInput = ({ value, setValue, setPhoneCount, containerStyle, disabled }) => {
    return (
        <PhoneInput
            countryCodeEditable={false}
            country={"in"}
            value={value}
            onChange={(value) => {
                { setValue && setValue(value) }
            }}
            isValid={function (value, info) {
                let count = info.format.split(".").length - 1;
                { setPhoneCount && setPhoneCount(count) };
                // return e.match(/12345/) ? "Invalid value: " + e + ", " + t.name : !e.match(/1234/)
            }}
            containerStyle={containerStyle ? containerStyle : null}
            disabled={disabled && disabled}
        />

    )
}

export default PhoneNumberInput;
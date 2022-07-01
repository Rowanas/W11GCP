import React from 'react';

const OpeningTimes = () => {
    return (
        <div id="OpeningTimes">
            <p>
                Please see below for the Cinema opening times.
            </p>

            <table>
                <tbody>
                    <tr>
                        <td>Monday</td>
                        <td>8am-9pm</td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td>8am-9pm</td>
                    </tr>
                    <tr>
                        <td >Wednesday</td>
                        <td>8am-9pm</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td>8am-9pm</td>
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td>8am-9pm</td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td>8am-11pm</td>
                    </tr>
                    <tr>
                        <td>Sunday</td>
                        <td>10am-7pm</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default OpeningTimes;
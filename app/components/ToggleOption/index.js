/**
 *
 * ToggleOption
 *
 */

import React from 'react';
import { injectIntl, intlShape } from 'react-intl';

const ToggleOption = ({ value, message, intl }) => (

    <option value={value} className="flag-icon flag-icon-us" data-content="<span class=&quot;flag-icon flag-icon-us&quot;></span> English">
        {message ? intl.formatMessage(message) : value}
    </option>

);

ToggleOption.propTypes = {
    value: React.PropTypes.string.isRequired,
    message: React.PropTypes.object,
    intl: intlShape.isRequired,
};

export default injectIntl(ToggleOption);

/*
Copyright 2020 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from 'react';
import IncomingCallBox2 from './IncomingCallBox2';
import CallPreview from './CallPreview';
import * as VectorConferenceHandler from '../../../VectorConferenceHandler';

interface IProps {

}

interface IState {

}

export default class CallContainer extends React.PureComponent<IProps, IState> {
    public render() {
        return <div className="mx_CallContainer">
            <IncomingCallBox2 />
            <CallPreview ConferenceHandler={VectorConferenceHandler} />
        </div>;
    }
}

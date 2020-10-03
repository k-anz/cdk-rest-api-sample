import { expect as expectCDK, matchTemplate, MatchStyle, haveResource } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import { RestApiStack } from '../lib/rest-api-stack';

test('RestApiStack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new RestApiStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(haveResource('AWS::Lambda::Function'));
});

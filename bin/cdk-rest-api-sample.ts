#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkRestApiSampleStack } from '../lib/cdk-rest-api-sample-stack';

const app = new cdk.App();
new CdkRestApiSampleStack(app, 'CdkRestApiSampleStack');

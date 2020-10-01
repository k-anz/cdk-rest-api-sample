import * as cdk from '@aws-cdk/core';
import { Function, Runtime, Code } from '@aws-cdk/aws-lambda';
import { Duration } from '@aws-cdk/core';

export class RestApiStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    this.createLambdaFunction();
  }

  private createLambdaFunction() {
    return new Function(this, 'LambdaHandler', {
      runtime: Runtime.NODEJS_12_X,
      code: Code.fromAsset('./dist'),
      handler: 'index.handler',
      timeout: Duration.minutes(1),
    });
  }
}

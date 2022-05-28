#!/bin/bash

userPoolId=$(aws cognito-idp list-user-pools --max-results 10 | jq -r --arg NAME "$1" '.UserPools[] | select(.Name == $NAME) | .Id')
echo ${userPoolId}
clientId=$(aws cognito-idp list-user-pool-clients --user-pool-id $userPoolId | jq -r --arg USERPOOLID "$userPoolId" '.UserPoolClients[] | select(.UserPoolId == $USERPOOLID) | .ClientId')
echo $clientId

sed -i "s/<userPoolId>/${userPoolId}/" $2
sed -i "s/<clientId>/${clientId}/" $2

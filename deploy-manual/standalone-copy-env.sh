#!/bin/bash

cd $(dirname $0)

cd ./.. || { echo "Cannot go to parent directory"; exit 1; }

if [ -z "$1" ]; then
  echo "Parameter for .env.[stage] was not set"
  exit 1;
fi

if ! [ -f "$1" ]; then
  echo "Could not find file $1"
  exit 1;
fi

cp ./"$1" ./.next/standalone/.env.production
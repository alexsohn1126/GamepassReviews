'use client'

import next from 'next';
import { useState } from 'react';

function GameDisplay({json}) {
  console.log(json);
  return (
    <div class="max-w-xs bg-green-700">
      <img class="rounded w-400" src={json.Images[1].Uri}></img>
      <h3 class="text-gray-300">{json.ProductTitle}</h3>
      <h4 class="text-gray-300">{json.DeveloperName}</h4>
      <h4 class="text-gray-300"><i>{json.PublisherName}</i></h4>
    </div>
  )
}

export default function Main() {
  const json = require('../public/testfile.json');
  //console.log(json);

  return (
    <GameDisplay json={json}></GameDisplay>
  )
}

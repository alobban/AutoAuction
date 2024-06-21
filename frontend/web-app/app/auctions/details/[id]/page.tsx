import React from 'react';

export default function Details({ params }: { params: { id: string } }) {
  return (
    <div>
      <div>Details for {params.id}</div>
    </div>
  );
}

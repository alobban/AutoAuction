import React from 'react';

export default function Update({ params }: { params: { id: string } }) {
  return (
    <div>
      <div>Update for {params.id}</div>
    </div>
  );
}

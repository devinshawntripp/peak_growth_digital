import React, { useState } from 'react';
import { Form, useSubmit } from '@remix-run/react';

export default function BlogSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const submit = useSubmit();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submit(event.currentTarget, { replace: true });
  };

  return (
    <Form method="get" onSubmit={handleSearch} className="mb-8">
      <div className="form-control">
        <div className="input-group">
          <input
            type="text"
            name="q"
            placeholder="Search blog posts..."
            className="input input-bordered w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="btn btn-square">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </Form>
  );
}
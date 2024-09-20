import React, { useState } from 'react';
import { Form, useActionData, useNavigation } from '@remix-run/react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const actionData = useActionData<{ error?: string }>();
  const navigation = useNavigation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (!email) {
      event.preventDefault();
      alert('Please enter your email address');
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Subscribe to Our Newsletter</h2>
        <Form method="post" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered"
              required
            />
          </div>
          {actionData?.error && (
            <p className="text-error mt-2">{actionData.error}</p>
          )}
          <button
            type="submit"
            className="btn btn-primary mt-4"
            disabled={navigation.state === 'submitting'}
          >
            {navigation.state === 'submitting' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </Form>
      </div>
    </div>
  );
}
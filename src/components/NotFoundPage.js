import React from 'react';
import { Link } from 'react-router';

export default class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        <h2>404</h2>
        <h3>Sayfa bulunamadı</h3>
        <p>
          <Link to="/">Ana sayfaya dön</Link>
        </p>
      </div>
    );
  }
}
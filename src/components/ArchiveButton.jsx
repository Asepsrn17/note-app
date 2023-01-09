import React from 'react';

function ArchivedButton({ id, archived, onArchive }) {
    return (
        <div className='detail-page__action' onClick={() => onArchive(id)}>{archived ? "Aktifkan" : "Arsipkan"}
        </div>
    )
}

export default ArchivedButton;
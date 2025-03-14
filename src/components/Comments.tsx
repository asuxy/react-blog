export default function Comments() {
    return (
      <section className="mt-10 p-4 border-t border-gray-300">
        <h2 className="text-xl font-semibold mb-4">Comments</h2>
        
        <div className="space-y-4">
          <div className="p-4 bg-gray-100 rounded-lg">
            <p className="font-medium">John Doe</p>
            <p className="text-gray-600">This was a great post! Very informative.</p>
          </div>
  
          <div className="p-4 bg-gray-100 rounded-lg">
            <p className="font-medium">Jane Smith</p>
            <p className="text-gray-600">I learned a lot, thanks for sharing!</p>
          </div>
        </div>
      </section>
    );
  }
  
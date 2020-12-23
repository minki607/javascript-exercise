const comments = [
  'Error et development ipsa facere.',
  'Nemo qui harum.',
  'Est est recusandae reprehenderit.',
  'Aliquam libero quidem enim.',
  'Culpa quia ut development quo.',
  'Aliquam ad omnis sunt aperiam aliquid temporibus sunt.',
  'Aspernatur development ea maiores illum sint qui deleniti optio.',
 ];

const getDev = arr => {
  let total = 0;
  arr.forEach(value => { if (/development/.test(value)) total++; });
  return total;
 }

 console.log(getDev(comments));

 

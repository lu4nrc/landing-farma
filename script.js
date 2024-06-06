// Inicializar o Supabase com suas credenciais
const supabaseUrl = 'https://dcrztzhlowoulffgfmbg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjcnp0emhsb3dvdWxmZmdmbWJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk3NzQwNDIsImV4cCI6MjAwNTM1MDA0Mn0.vTdynG4Eefmt6VaHzZ2iRqKjUeUESbypzZdrjLb10Rg';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabase = createClient(supabaseUrl, supabaseKey);

async function submitSubscription(name, tel, email, cnpj) {
  console.log("Clicked")
  try {
    const subscriptionData = {
      name: name,
      tel: tel,
      email: email,
      cnpj: cnpj
    };
    
    const { data, error } = await supabase
      .from('formbusiness')
      .insert([subscriptionData]);
    
    if (error) {
      console.error('Erro ao adicionar dados:', error.message);
    } else {
      console.log('Dados adicionados com sucesso:');
      alert('Seus Dados foram enviados com sucesso, aguarde e entraremos em contato!');
      
      // Limpar os campos do formulário
      document.getElementById('subscriptionForm').reset();
    } 
  } catch (error) {
    console.error('Erro ao adicionar dados:', error.message);
  }
}

document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  let name = event.target['name'].value;
  let tel = event.target['tel'].value;
  let email = event.target['email'].value;
  let cnpj = event.target['cnpj'].value;
  
  submitSubscription(name, tel, email, cnpj);
});

window.smoothScroll = function(target) {
  var scrollContainer = target;
  do { //find scroll container
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);

  var targetY = 0;
  do { //find the top of target relatively to the container
      if (target == scrollContainer) break;
      targetY += target.offsetTop;
  } while (target = target.offsetParent);

  scroll = function(c, a, b, i) {
      i++; if (i > 30) return;
      c.scrollTop = a + (b - a) / 30 * i;
      setTimeout(function(){ scroll(c, a, b, i); }, 20);
  }
  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}